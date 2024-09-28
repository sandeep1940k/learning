import React from "react";
import COURSES from "../constant/courses.constant.ts";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const handleCourse = (id: string) => {
        navigate(`/${id}`);
    }
    return (
        <>
            <nav>
                <h1>Dashboard</h1>
            </nav>
            <section>
                {COURSES.map(course => (
                    <div key={course.id} onClick={()=> handleCourse(course.id)} className="bg-sky-300 border border-black w-100 h-100 p-6 m-6 rounded-lg cursor-pointer">{course.name}</div>
                ))}
            </section>
        </>
    )
}

export default Dashboard;