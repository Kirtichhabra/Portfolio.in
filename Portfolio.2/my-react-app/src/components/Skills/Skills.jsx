import React, { useState } from "react";
import "./Skills.css";
import SkillCard from "./src/components/Skills/SkillCard/SkillCard";
import SkillsInfoCard from "./src/components/Skills/SkillsInfoCard/SkillsInfoCard"; // Assuming you have imported SkillsInfoCard component
import { Skills } from "./src/utils/data";

const SkillsComponent = () => {
    const [selectedSkill, setSelectedSkill] = useState(Skills[0]); // Assuming you have defined a state for selectedSkill

    const handleSelectedSkill = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <section className="skills-container">
            <h5>Technical Proficiency</h5>

            <div className="skills-content">
                <div className="skills">
                    {Skills.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => {
                                handleSelectedSkill(item);
                            }}
                        />
                    ))}
                </div>
                <div className="skills-info">
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </section>
    );
};

export default SkillsComponent;
