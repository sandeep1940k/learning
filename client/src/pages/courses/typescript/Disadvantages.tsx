import React from "react";

const Disadvantages: React.FC = () => {
    return (
        <>
            <div>
                <h1 className="font-bold py-2">Disadvantages</h1>
                <ul className="list-disc list-inside">
                    <li>It takes a long time to compile TypeScript code.</li>
                    <li>Abstract classes are not supported in TypeScript.</li>
                    <li>Converting TypeScript to JavaScript requires an additional compilation step.</li>
                    <li>Its type schema is extremely complicated.</li>
                </ul>
            </div>
        </>
    )
}

export default Disadvantages;