"use client";
import { BackgroundDots } from "~/components/background-dots.tsx";
import { useState } from "react";
import { env } from "~/env.mjs";

export default function IndexPage() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [futureUse, setFutureUse] = useState("");
    const [betaTester, setBetaTester] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [suggestions, setSuggestions] = useState("");

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailError(validateEmail(newEmail) ? "" : "Invalid email");
    };

    const handleFutureUseChange = (e) => {
        setFutureUse(e.target.value);
    };

    const handleBetaTesterChange = (e) => {
        setBetaTester(e.target.value);
    };

    const handleContactInfoChange = (e) => {
        setContactInfo(e.target.value);
    };

    const handleSuggestionsChange = (e) => {
        setSuggestions(e.target.value);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <section className="relative min-h-screen">
            <div className="container mx-auto flex min-h-screen flex-col justify-center text-center">
                <div className="mb-auto"></div>
                <div className="py-12 lg:py-16">
                    <img src="/logo.svg" alt="Logo" className="mx-auto h-80 w-80" />
                    <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
                        Join The Waitlist for{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent">
              Pathfinder
            </span>{" "}
                        Today!
                    </h1>
                    <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
                        Pathfinder is an AI travel assistant that helps you plan your trips.
                        From finding you the best flights to booking your hotels, searching for places to visit, and even suggesting the best restaurants, Pathfinder has got you covered.
                    </p>
                    <form
                        action={env.NEXT_PUBLIC_GOOGLE_FORM_URL}
                        method="POST"
                        target="_blank"
                    >
                        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
                            <div className="relative z-10">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full rounded-md border bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-80"
                                    value={email}
                                    onChange={handleEmailChange}
                                    onBlur={validateEmail}
                                    name={env.NEXT_PUBLIC_GOOGLE_FORM_EMAIL}
                                    required
                                />
                                {emailError && (
                                    <p className="mt-1 text-sm text-red-500">{emailError}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="z-10 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                            >
                                Join Waitlist
                            </button>
                        </div>
                        <div className="mb-8 flex flex-col justify-center gap-4">
                            <div className="relative z-10">
                                <label htmlFor="futureUse" className="block text-sm font-medium text-gray-700">
                                    Would you want to use this app in the future?
                                </label>
                                <select
                                    id="futureUse"
                                    name={env.NEXT_PUBLIC_GOOGLE_FORM_FUTURE_USE}
                                    className="mt-1 block w-full rounded-md border bg-white px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={futureUse}
                                    onChange={handleFutureUseChange}
                                    required
                                >
                                    <option value="">Select an option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Maybe">Maybe</option>
                                </select>
                            </div>
                            <div className="relative z-10">
                                <label htmlFor="betaTester" className="block text-sm font-medium text-gray-700">
                                    Do you want access to an early version of this app? (Are you interested to become a beta tester for the app?)
                                </label>
                                <select
                                    id="betaTester"
                                    name={env.NEXT_PUBLIC_GOOGLE_FORM_BETA_TESTER}
                                    className="mt-1 block w-full rounded-md border bg-white px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={betaTester}
                                    onChange={handleBetaTesterChange}
                                    required
                                >
                                    <option value="">Select an option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="relative z-10">
                                <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">
                                    Please provide an email/User ID where I can contact you if you want to use the app. (Instagram, Twitter, Email only)
                                </label>
                                <input
                                    type="text"
                                    id="contactInfo"
                                    placeholder="Your Contact Information"
                                    className="w-full rounded-md border bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={contactInfo}
                                    onChange={handleContactInfoChange}
                                    name={env.NEXT_PUBLIC_GOOGLE_FORM_CONTACT_INFO}
                                />
                            </div>
                            <div className="relative z-10">
                                <label htmlFor="suggestions" className="block text-sm font-medium text-gray-700">
                                    Any other suggestions for the app?
                                </label>
                                <textarea
                                    id="suggestions"
                                    placeholder="Your Suggestions"
                                    className="w-full rounded-md border bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={suggestions}
                                    onChange={handleSuggestionsChange}
                                    name={env.NEXT_PUBLIC_GOOGLE_FORM_SUGGESTIONS}
                                    rows="4"
                                />
                            </div>
                        </div>
                    </form>
                    <div>
                        Please make sure your Google account is logged in.
                    </div>
                </div>
                <div className="mt-auto"></div>
            </div>
            <BackgroundDots className="absolute inset-0" />
        </section>
    );
}