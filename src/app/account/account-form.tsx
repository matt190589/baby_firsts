'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'

export default function AccountForm({ user }: { user: User | null }) {
    const supabase = createClient()
    const [loading, setLoading] = useState(true)
    const [fullname, setFullname] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [website, setWebsite] = useState<string | null>(null)
    const [avatar_url, setAvatarUrl] = useState<string | null>(null)

    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

        const { data, error, status } = await supabase
            .from('profiles')
            .select(`full_name, username, website, avatar_url`)
            .eq('id', user?.id)
            .single()

        if (error && status !== 406) {
            console.log(error)
            throw error
        }

        if (data) {
            setFullname(data.full_name)
            setUsername(data.username)
            setWebsite(data.website)
            setAvatarUrl(data.avatar_url)
        }
        } catch (error) {
            alert('Error loading user data!')
        } finally {
            setLoading(false)
        }
    }, [user, supabase])

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    async function updateProfile({
        username,
        website,
        avatar_url,
    }: {
        username: string | null
        fullname: string | null
        website: string | null
        avatar_url: string | null
    }) {
        try {
            setLoading(true)

        const { error } = await supabase.from('profiles').upsert({
            id: user?.id as string,
            full_name: fullname,
            username,
            website,
            avatar_url,
            updated_at: new Date().toISOString(),
        })
        if (error) throw error
            alert('Profile updated!')
        } catch (error) {
            alert('Error updating the data!')
        } finally {
            setLoading(false)
        }
    }

    return (
    <div className="flex flex-col items-center justify-between bg-bf-off-white p-12 md:p-24 ">
        <div className="w-[240px] xs:w-[300px]">
            <label htmlFor="email">Email</label>
                <input
                    className="w-full p-2 bg-bf-navy border rounded text-bf-off-white"
                    id="email"
                    type="text"
                    value={user?.email}
                    disabled
                />
        </div>
        <div className="w-[240px] xs:w-[300px]">
            <label htmlFor="fullName">Full Name</label>
            <input
                className="w-full p-2 bg-bf-navy border rounded text-bf-off-white"
                id="fullName"
                type="text"
                value={fullname || ''}
                onChange={(e) => setFullname(e.target.value)}
            />
        </div>
        <div className="w-[240px] xs:w-[300px]">
            <label htmlFor="username">Username</label>
            <input
                className="w-full p-2 bg-bf-navy border rounded text-bf-off-white"
                id="username"
                type="text"
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="w-[240px] xs:w-[300px]">
            <label htmlFor="website">Website</label>
            <input
                className="w-full p-2 bg-bf-navy border rounded text-bf-off-white"
                id="website"
                type="url"
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
            />
        </div>
        <div className="flex items-center justify-center">
            <div className="text-bf-navy px-3 py-2 rounded hover:bg-bf-navy hover:text-bf-off-white m-4">
                <button
                    className=""
                    onClick={() => updateProfile({ fullname, username, website, avatar_url })}
                    disabled={loading}
                >
                    {loading ? 'Loading ...' : 'Update'}
                </button>
            </div>
            <div className="text-bf-navy px-3 py-2 rounded hover:bg-bf-navy hover:text-bf-off-white m-4">
                <form action="/auth/signout" method="post">
                    <button className="button block" type="submit">
                        Sign out
                </button>
                </form>
            </div>
        </div>
    </div>
    )
}