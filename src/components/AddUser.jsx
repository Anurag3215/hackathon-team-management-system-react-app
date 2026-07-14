import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
    const [input, changeInput] = useState({
        team_id: "",
        team_name: "",
        team_leader_name: "",
        leader_email: "",
        leader_phone: "",
        college_name: "",
        number_of_members: "",
        project_title: "",
        problem_statement_track: "",
        technology_stack: "",
        mentor_name: "",
        registration_date: "",
        table_station_number: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const readValue = () => {
        axios
            .post("http://localhost:7000/add-team", input)
            .then((response) => {
                setMessage(response.data.message || "Team Registered Successfully");
                setError("");

                changeInput({
                    team_id: "",
                    team_name: "",
                    team_leader_name: "",
                    leader_email: "",
                    leader_phone: "",
                    college_name: "",
                    number_of_members: "",
                    project_title: "",
                    problem_statement_track: "",
                    technology_stack: "",
                    mentor_name: "",
                    registration_date: "",
                    table_station_number: "",
                });
            })
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong");
                }
                setMessage("");
            });
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">

                    <div
                        style={{
                            background: "#181818",
                            border: "1px solid rgba(212,175,55,.2)",
                            borderRadius: "18px",
                            padding: "40px",
                            boxShadow: "0 20px 50px rgba(0,0,0,.45)"
                        }}
                    >

                        <h2
                            className="text-center mb-2"
                            style={{
                                color: "#D4AF37",
                                fontWeight: "700",
                                letterSpacing: "1px"
                            }}
                        >
                            Team Registration
                        </h2>

                        <p
                            className="text-center mb-5"
                            style={{ color: "#999" }}
                        >
                            Register your hackathon team
                        </p>

                        {message && (
                            <div className="alert alert-success">
                                {message}
                            </div>
                        )}

                        {error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )}

                        <div className="row g-4">

                            <div className="col-md-6">
                                <label className="form-label text-warning">Team ID</label>
                                <input
                                    type="text"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="team_id"
                                    value={input.team_id}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">Team Name</label>
                                <input
                                    type="text"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="team_name"
                                    value={input.team_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">Team Leader Name</label>
                                <input
                                    type="text"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="team_leader_name"
                                    value={input.team_leader_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">Leader Email</label>
                                <input
                                    type="email"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="leader_email"
                                    value={input.leader_email}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">Leader Phone</label>
                                <input
                                    type="text"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="leader_phone"
                                    value={input.leader_phone}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">College Name</label>
                                <input
                                    type="text"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="college_name"
                                    value={input.college_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">Number of Members</label>
                                <input
                                    type="number"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="number_of_members"
                                    value={input.number_of_members}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">Project Title</label>
                                <input
                                    type="text"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="project_title"
                                    value={input.project_title}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">Problem Statement Track</label>
                                <input
                                    type="text"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="problem_statement_track"
                                    value={input.problem_statement_track}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">Technology Stack</label>
                                <input
                                    type="text"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="technology_stack"
                                    value={input.technology_stack}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">Mentor Name</label>
                                <input
                                    type="text"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="mentor_name"
                                    value={input.mentor_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">Registration Date</label>
                                <input
                                    type="date"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="registration_date"
                                    value={input.registration_date}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-warning">Table / Station Number</label>
                                <input
                                    type="text"
                                    className="form-control bg-dark text-light border-secondary"
                                    name="table_station_number"
                                    value={input.table_station_number}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12 mt-4">
                                <button
                                    className="btn w-100"
                                    style={{
                                        background: "#D4AF37",
                                        color: "#111",
                                        fontWeight: "600",
                                        padding: "12px",
                                        borderRadius: "10px"
                                    }}
                                    onClick={readValue}
                                >
                                    Register Team
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddUser;