import React from "react";

const Arrays: React.FC = () => {
    return (
        <>
            <h1 className="font-bold py-2">Arrays</h1>
            <div className="bg-red-50 p-4 rounded-md">
                <p>
                    An array is a collection of values of the same data type. It allows you to store multiple values of the same type in a single variable. Arrays are ordered and indexed, with indexing starting from 0. This means the first element has an index of 0, the second has an index of 1, and so on.
                </p>

                <p className="font-bold my-2">Syntax:</p>
                <pre className="bg-black p-4 rounded-md text-white">
                    <code>
                        <span className="text-blue-400">var</span> array_name: datatype[];{" "}
                        <span className="text-green-500">// declaration</span><br />
                        <span className="text-white">array_name</span> = [value1, value2, value3];{" "}
                        <span className="text-green-500">// initialization</span>
                    </code>
                </pre>

                <p className="font-bold my-2">Example:</p>
                <pre className="bg-black p-4 rounded-md text-white">
                    <code>
                        <span className="text-blue-400">let</span> values: number[] = [];<br />
                        values[0] = 10;<br />
                        values[1] = 20;<br />
                        values[2] = 30;
                    </code>
                </pre>
            </div>

            <h1 className="font-bold my-2">Features</h1>
            <div>
                <ul className="list-disc list-inside">
                    <li>Arrays allocate memory blocks in sequential order.</li>
                    <li>Arrays are immutable in size once created, but elements can be modified.</li>
                    <li>Each memory block in an array represents an element.</li>
                    <li>The index of an array element is a unique number identifying that element.</li>
                    <li>Arrays should be declared before use, typically with the <code>var</code> or <code>let</code> keyword.</li>
                    <li>"Array initialization" refers to the process of assigning values to an array.</li>
                    <li>Array elements' values can be updated or modified, but elements cannot be removed.</li>
                </ul>
            </div>
        </>
    );
};

export default Arrays;
