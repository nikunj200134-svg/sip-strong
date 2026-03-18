import React from 'react';

export default function ProductContextPage() {
    return (
        <main className="prose prose-invert mx-auto p-8 bg-black text-white">
            <h1>SipStrong – Product Context</h1>
            <h2>1. Product Overview</h2>
            <p>SipStrong is a ready‑to‑drink protein pouch delivering ~25 g of high‑quality protein in a convenient, portable format. It solves the friction of traditional protein supplementation by eliminating the need for mixing powders, shakers, or refrigeration, offering a mess‑free, on‑the‑go protein boost.</p>
            <h2>2. Primary Goal of the Website</h2>
            <p><strong>Selling products</strong> – the site’s core purpose is to convert visitors into customers through compelling product presentation and an easy checkout flow. Secondary goals (brand awareness, lead capture, education) support this primary sales focus.</p>
            <h2>3. Target Audience</h2>
            <ul>
                <li><strong>Gym users & athletes</strong> – need fast post‑workout protein for recovery and muscle growth.</li>
                <li><strong>Students</strong> – require quick, affordable nutrition between classes.</li>
                <li><strong>Busy professionals</strong> – want a portable protein boost without interrupting a packed schedule.</li>
                <li><strong>Fitness beginners</strong> – prefer an easy, no‑mess solution to start a protein habit.</li>
            </ul>
            <h2>4. Unique Value Proposition</h2>
            <ul>
                <li><strong>Portability:</strong> Small, lightweight pouch fits in pockets, backpacks, or gym bags.</li>
                <li><strong>Convenience:</strong> No mixing, no shaker, no refrigeration – just twist‑open and drink.</li>
                <li><strong>Consistent dosage:</strong> Each pouch guarantees ~25 g of protein, eliminating guesswork.</li>
                <li><strong>Premium formulation:</strong> High‑bioavailability protein blend with natural flavors, low sugar, and added electrolytes for performance.</li>
            </ul>
            <h2>5. Brand Positioning</h2>
            <p>SipStrong should feel <strong>premium, performance‑driven, and modern</strong> – a sleek, athletic brand that conveys scientific credibility while remaining approachable. Visual language includes a dark‑mode‑friendly palette, clean typography (e.g., Inter/Oswald), subtle micro‑animations, and high‑contrast product photography.</p>
            <h2>6. Customer Pain Points</h2>
            <ul>
                <li>Messy powder mixing and cleanup.</li>
                <li>Need for a shaker bottle or water source.</li>
                <li>Inconsistent protein servings.</li>
                <li>Lack of portable, ready‑to‑drink options that taste good.</li>
                <li>Time constraints that prevent proper nutrition.</li>
            </ul>
            <h2>7. Customer Benefits</h2>
            <table className="border-collapse border border-gray-600 w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-600 p-2 text-left">Functional</th>
                        <th className="border border-gray-600 p-2 text-left">Emotional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-600 p-2">Quick, mess‑free protein intake (25 g per pouch).</td>
                        <td className="border border-gray-600 p-2">Confidence that nutrition won’t hold back performance.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-600 p-2">Consistent taste and dosage every time.</td>
                        <td className="border border-gray-600 p-2">Feeling of being a “high‑performer” using cutting‑edge products.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-600 p-2">No equipment needed; fits anywhere.</td>
                        <td className="border border-gray-600 p-2">Pride in using a sleek, premium brand.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-600 p-2">Supports muscle recovery, satiety, and energy.</td>
                        <td className="border border-gray-600 p-2">Peace of mind that health goals are being met effortlessly.</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}
