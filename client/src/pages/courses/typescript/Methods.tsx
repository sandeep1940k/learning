import React from "react";

const Methods: React.FC = () => {
    return (
        <>
            <h1 className="font-bold py-2 text-xl">Methods</h1>
            <div>
                <h2 className="font-bold py-2">1. parseInt<code>()</code></h2>
                <p>Converts a string to an integer by parsing its first part as an integer.</p>
                <h3 className="font-bold">Behavior:</h3>
                <ul className="list-disc list-inside">
                    <li>Ignores any characters after the first non-numeric character.</li>
                    <li>Can accept a second argument called the radix, which specifies the base of the numeral system (e.g., base 10 for decimal, base 2 for binary).</li>
                    <li>Does not round, but simply truncates the decimal part if present.</li>
                </ul>
                <h3 className="font-bold">Example:</h3>
                <div className="flex">
                    <code className="p-2 bg-gray-200 rounded-md w-[50%] border border-white">parseInt("123.45");</code>
                    <p className="p-2"><code>123</code></p>
                </div>
                <div className="flex">
                    <code className="p-2 bg-gray-200 rounded-md w-[50%] border border-white">parseInt("1010", 2);</code>
                    <p className="p-2"><code>10</code></p>
                </div>
                <div className="flex">
                    <code className="p-2 bg-gray-200 rounded-md w-[50%] border border-white">parseInt("123abc");</code>
                    <p className="p-2"><code>123</code></p>
                </div>
                <div className="flex">
                    <code className="p-2 bg-gray-200 rounded-md w-[50%] border border-white">parseInt("abc123");</code>
                    <p className="p-2"><code>NaN</code></p>
                </div>

                <h1 className="font-bold">When to Use:</h1>
                <ul className="list-disc list-inside">
                    <li>Use <code>parseInt()</code> : When you want to extract only integer part of a string, and you're dealing with a specific base (e.g., binary, hexadecimal).</li>
                </ul>
                
                <h2 className="font-bold py-2">2. parseFloat <code>()</code></h2>
                <p>Converts a string to a floating-point (decimal) number.</p>
                <h3 className="font-bold">Behavior:</h3>
                <ul className="list-disc list-inside">
                    <li>Similar to parseInt<code>()</code>, but is doesn't truncate the decimal part.</li>
                    <li>Stops parsing after the first non-numeric character.</li>
                    <li>Does not accept a radix argument.</li>
                </ul>
                <h3 className="font-bold">Example:</h3>
                <div className="flex">
                    <code className="p-2 bg-gray-200 rounded-md w-[50%] border border-white">parseFloat("123.45");</code>
                    <p className="p-2"><code>123.45</code></p>
                </div>
                <div className="flex">
                    <code className="p-2 bg-gray-200 rounded-md w-[50%] border border-white">parseFloat("123abc");</code>
                    <p className="p-2"><code>123</code></p>
                </div>
                <div className="flex">
                    <code className="p-2 bg-gray-200 rounded-md w-[50%] border border-white">parseFloat("abc123");</code>
                    <p className="p-2"><code>NaN</code></p>
                </div>
                <h1 className="font-bold">When to Use:</h1>
                <ul className="list-disc list-inside">
                    <li>Use <code>parseFloat()</code> : When you need to convert a string to a floating-point number and want to keep decimal precision.</li>
                </ul>

                <h2 className="font-bold py-2">3. Number <code>()</code></h2>
                <p>Converts a string to a number (either integer or floating-point).</p>
                <h3 className="font-bold">Behavior:</h3>
                <ul className="list-disc list-inside">
                    <li>Tries to convert the entire string into a number.</li>
                    <li>Will return NaN if any part of the string is not a valid number (e.g., if the string contains non-numeric characters).</li>
                    <li>Handles both integers and floating-point numbers.</li>
                </ul>
                <h3 className="font-bold">Example:</h3>
                <div className="flex">
                    <code className="p-2 bg-gray-200 rounded-md w-[50%] border border-white">Number("123.45");</code>
                    <p className="p-2"><code>123.45</code></p>
                </div>
                <div className="flex">
                    <code className="p-2 bg-gray-200 rounded-md w-[50%] border border-white">Number("123abc");</code>
                    <p className="p-2"><code>NaN</code></p>
                </div>
                <div className="flex">
                    <code className="p-2 bg-gray-200 rounded-md w-[50%] border border-white">Number("abc123");</code>
                    <p className="p-2"><code>NaN</code></p>
                </div>
                <h1 className="font-bold">When to Use:</h1>
                <ul className="list-disc list-inside">
                    <li>Use <code>Number()</code> : When you want a strict conversion of the entire string into a number, and it must either be a valid number or return NaN for invalid input.</li>
                </ul>

                <p className="font-bold py-2">You can convert a string to a number by using parseInt(), parseFloat() and Number() Method.</p>
            </div>
        </>
    )
}

export default Methods;