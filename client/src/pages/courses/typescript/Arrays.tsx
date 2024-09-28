import React from "react";

const Arrays: React.FC = () => {
    return (
        <>
            <div className="bg-red-50">
                <p>A collection of values of the same data type is called an array. It's a kind that's been defined by the user. To store values of the same kind, you use arrays. Arrays are collections of values that are ordered and indexed. The indexing begins at zero, with the first element having index 0, the second having index 1, and so on.</p>
                <p className="font-bold my-2">Syntax:</p>
                <p className="bg-black p-2">
                    <span className="text-blue-400 p-2">var</span>
                    <span className="text-white mx-1">array_name</span>
                    <span className="text-blue-400">:</span> 
                    <span className="text-white mx-1">datatype</span>
                    <span className="text-blue-400">[];</span>&nbsp;
                    <span className="text-green-500">// declaration</span><br />
                    <span className="text-white p-2">array_name</span>
                    <span className="text-blue-400">=</span>
                    <span className="text-blue-400 mx-1">[</span>
                    <span className="text-white mx-1">value1</span>
                    <span className="text-blue-400">,</span>
                    <span className="text-white mx-1">value2</span>
                    <span className="text-blue-400">,</span>
                    <span className="text-white mx-1">value3</span>
                    <span className="text-blue-400 mx-1">]</span>&nbsp;
                    <span className="text-green-500">// initialization</span>
                </p>
                <p className="font-bold my-2">Example:</p>
                <p className="bg-black p-2">
                    <span className="text-blue-400 p-2">let</span>
                    <span className="text-white mx-1">values</span>
                    <span className="text-blue-400">:</span> 
                    <span className="text-white mx-1">number</span>
                    <span className="text-blue-400">[] = [];</span><br />
                    <span className="text-white p-2">values</span>
                    <span className="text-blue-400">[</span>
                    <span className="text-white mx-1">0</span>
                    <span className="text-blue-400">] = </span>
                    <span className="text-white mx-1">10</span>
                    <span className="text-blue-400">;</span><br />
                    <span className="text-white p-2">values</span>
                    <span className="text-blue-400">[</span>
                    <span className="text-white mx-1">1</span>
                    <span className="text-blue-400">] = </span>
                    <span className="text-white mx-1">20</span>
                    <span className="text-blue-400">;</span><br />
                    <span className="text-white p-2">values</span>
                    <span className="text-blue-400">[</span>
                    <span className="text-white mx-1">2</span>
                    <span className="text-blue-400">] = </span>
                    <span className="text-white mx-1">30</span>
                    <span className="text-blue-400">;</span><br />
                </p>
            </div>
            <h1 className="font-bold my-2">Features</h1>
            <div>
                <ul className="list-disc list-inside">
                    <li>An array declaration allocates memory blocks in a sequential order.</li>
                    <li>Arrays are immutable. This means that once an array is created, it cannot be resized.</li>
                    <li>An array element is represented by each memory block.</li>
                    <li>The subscript/index of any array element is a unique number that identifies the element.</li>
                    <li>Arrays, like variables, should be declared before being used. Declare an array with the var keyword.</li>
                    <li>The team "array initialization" refers to the process of filling an array with elements.</li>
                    <li>The value of array elements can be updated or modified, but they cannot be erased.</li>
                </ul>
            </div>
        </>
    )
}

export default Arrays;