import React, { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import { projects } from '../../assets/data';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [projectsList, setProjectsList] = useState(projects);

  const filterProjects = (projects) => (filter === 'All' ? projects : projects.filter((project) => project.category === filter));

  const onSelectFilter = (filter) => {
    setFilter(filter);
    setProjectsList(filterProjects(projects));
  };

  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

  return (
    <>
      <Toolbar filters={filters} selected={filter} onSelectFilter={onSelectFilter} />
      <ProjectList projects={projectsList} />
    </>
  );
};

export default Portfolio;
