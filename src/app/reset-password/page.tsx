'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleResetPassword = (e: any) => {
        e.preventDefault();

        // Check if the passwords match
        if (newPassword !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        // Proceed with password reset logic (e.g., call an API)
        // For demo purposes, just simulate success
        setSuccessMessage('Your password has been reset successfully!');
        setErrorMessage('');

        // Optionally redirect the user after successful password reset
        setTimeout(() => {
            router.push('/');
        }, 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-center mb-6">Reset Your Password</h2>

                {/* Error and Success Messages */}
                {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

                <form onSubmit={handleResetPassword} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}
