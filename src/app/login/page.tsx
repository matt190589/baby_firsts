import Link from 'next/link'
import { login } from './actions'

export default function LoginPage() {

    return (
        <form className="flex flex-col items-center justify-center p-8">
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button
                className="rounded-xl bg-sky-500 hover:bg-sky-700 text-white p-2 my-2"
                formAction={login}
            >
                Log in
            </button>
            <button className="rounded-xl bg-gray-300 hover:bg-gray-500 text-white p-2 my-2">
                <Link href="/register">
                    Register
                </Link>
            </button>
        </form>
    )
}