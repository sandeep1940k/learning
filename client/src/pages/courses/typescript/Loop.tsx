import React from "react";

const Loops: React.FC = () => {
    return (
        <>
            <h1 className="font-bold text-xl mb-4">Loops in TypeScript</h1>
            <div>
                <p className="mb-2">
                    Loops allow you to repeat the execution of a statement or a block of code. TypeScript provides different types of loops to handle repetition based on various conditions.
                </p>
                
                <h2 className="font-bold mb-2">Types of Loops:</h2>
                
                <ul className="list-disc list-inside ml-4">
                    <li><strong>For Loop</strong></li>
                </ul>
                <p className="mb-4">
                    The <strong>for</strong> loop is a definite loop, meaning it repeats for a fixed number of iterations. This loop is commonly used when the number of iterations is known beforehand.
                </p>

                <ul className="list-disc list-inside ml-4">
                    <li><strong>While Loop</strong></li>
                </ul>
                <p className="mb-4">
                    The <strong>while</strong> loop repeats the code as long as the specified condition is true. This loop is typically used when the number of iterations is not predetermined, but depends on a condition.
                </p>

                <ul className="list-disc list-inside ml-4">
                    <li><strong>Do While Loop</strong></li>
                </ul>
                <p className="mb-4">
                    The <strong>do...while</strong> loop is similar to the <strong>while</strong> loop, but the condition is evaluated after executing the code block. This means the loop will always execute at least once.
                </p>
            </div>
        </>
    );
}

export default Loops;
