import React from "react";

const AccessModifiers: React.FC = () => {
    return (
        <>
            <h1 className="font-bold text-xl mb-4">Access Modifiers in TypeScript</h1>
            <div>
                <p>TypeScript supports three main access modifiers:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>
                        <strong>Protected</strong> - Accessible by the class itself and any subclasses, but not by instances of the class.
                    </li>
                    <li>
                        <strong>Private</strong> - Only accessible within the class it is defined in, and not by subclasses or instances.
                    </li>
                    <li>
                        <strong>Public</strong> - Accessible by the class, any subclasses, and instances of the class. This is the default if no modifier is specified.
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AccessModifiers;
