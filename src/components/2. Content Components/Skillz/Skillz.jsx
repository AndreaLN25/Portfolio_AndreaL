import React, { useEffect } from 'react';
import '../../../assets/css/SharedStyles1.css'; 
import WOW from 'wow.js';
import { SiMysql, SiMongodb, SiReact, SiPython, SiHtml5, SiCss3, SiJavascript, SiGit, SiPhp, SiPostman } from "react-icons/si";
import { categories } from '../../../your_info';

const Skillz = () => {
    useEffect(() => {
        new WOW().init();
    }, []);

    const renderIcon = (icon) => {
        switch (icon) {
            case 'simple-icons:html5': return <SiHtml5 size={40} />;
            case 'simple-icons:css3': return <SiCss3 size={40} />;
            case 'simple-icons:javascript': return <SiJavascript size={40} />;
            case 'simple-icons:php': return <SiPhp size={40} />;
            case 'simple-icons:react': return <SiReact size={40} />;
            case 'simple-icons:python': return <SiPython size={40} />;
            case 'simple-icons:mysql': return <SiMysql size={40} />;
            case 'simple-icons:mongodb': return <SiMongodb size={40} />;
            case 'simple-icons:git': return <SiGit size={40} />;
            case 'simple-icons:docker': return <SiPostman size={40} />;
            case 'simple-icons:postman': return <SiPostman size={40} />;
            default: return null;
        }
    };

    return (
        <section id="Skills" className="shared-section">
            <div className="shared-container">
                <div className="shared-title text-center">
                    <h3 className="zoomIn" data-wow-delay=".2s"> {/* <h3 className="wow zoomIn" data-wow-delay=".2s"> */}
                        Skills
                    </h3>
                    <h2 className="fadeInUp" data-wow-delay=".4s"> {/* <h2 className="wow fadeInUp" data-wow-delay=".4s"> */}
                        Exploring and Expanding My Career: Finance, Development, and SAP Development or Consulting 
                    </h2>
                    <p className="fadeInUp" data-wow-delay=".6s">{/* <p className="wow fadeInUp" data-wow-delay=".6s"> */}
                        The skills and technologies I've acquired to create impactful solutions in various fields.
                    </p>
                </div>

                <div className="shared-grid">
                    {categories.map((category) => (
                        <div key={category.name} className="shared-card">
                            <h3>{category.title}</h3>
                            {category.type === 'techskills' ? (
                                <div className="shared-tech-list">
                                    {category.skills.map((skill, index) => (
                                        <div key={index} className="shared-skill-item">
                                            <div className="shared-icon">{renderIcon(skill.icon)}</div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <ul className="shared-soft-list">
                                    {category.skills.map((skill, index) => (
                                        <li key={index} className="shared-skill-item">
                                            {skill.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skillz;