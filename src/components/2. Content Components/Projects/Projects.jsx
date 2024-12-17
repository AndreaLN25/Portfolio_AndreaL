import React, { useState } from 'react';
import '../../../assets/css/SharedStyles1.css';
import { projectData } from '../../../your_info';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const groupedProjects = projectData.reduce((acc, project) => {
        acc[project.category] = acc[project.category] || [];
        acc[project.category].push(project);
        return acc;
    }, {});

    const openModal = (project) => {
        setActiveProject(project);
    };

    const closeModal = () => {
        setActiveProject(null);
    };

    return (
        <section id="Projects" className="shared-section">
            <div className="shared-container">
                <div className="shared-title text-center">
                    <h3 className="zoomIn" data-wow-delay=".2s">
                        Projects
                    </h3>
                    <h2 className="fadeInUp" data-wow-delay=".4s">
                        Explore My Work
                    </h2>
                    <p className="fadeInUp" data-wow-delay=".6s">
                        A collection of impactful solutions in various fields.
                    </p>
                </div>

                <div className="shared-grid">
                    {Object.entries(groupedProjects).map(([category, projects], index) => (
                        <div key={index} className="shared-card">
                            <h3>{category}</h3>
                            <div className="shared-projects-list">
                                {projects.map((project, idx) => (
                                    <div key={idx} className="shared-project-item">
                                        <h5>{project.title}</h5>
                                        <p>{project.description}</p>
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                className="shared-btn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Demo
                                            </a>
                                        )}
                                        <img
                                            src={project.image}
                                            className={`project-image ${
                                                project.category === 'Accounting' ? 'a3-image' : ''
                                            } ${project.category === 'Consultant' ? 'sap-image' : ''}`}
                                        />
                                        {project.category === 'Development' && (
                                            <div className="cta-container">
                                                <button
                                                    className="shared-btn"
                                                    onClick={() => openModal(project)}
                                                >
                                                    See my projects
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {activeProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={closeModal}>
                            &times;
                        </button>
                        <h2>{activeProject.title}</h2>
                        <p>{activeProject.description}</p>
                        {activeProject.demoUrl && (
                            <a
                                href={activeProject.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn"
                            >
                                View Demo
                            </a>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
