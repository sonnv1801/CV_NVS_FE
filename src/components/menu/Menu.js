import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../../assets/avatar.png';
import Avatar from '@mui/material/Avatar';
import './style.css';
import { About } from '../../pages/home/about/About';
import { Education } from '../../pages/home/education/Education';
import { Experience } from '../../pages/home/experience/Experience';
import { Skills } from '../../pages/home/skills/Skills';
import { Interests } from '../../pages/home/interests/Interests';
import { Awards } from '../../pages/home/awards/Awards';
import MenuIcon from '@mui/icons-material/Menu';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ marginTop: '43px' }} id="menu-md-xl"></div>
      <nav
        id="menu-md-xl"
        className="navbar nav-sm"
        data-bs-theme="dark"
        style={{ background: '#bd5d38' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#!">
            <div className="avatar">
              <Avatar
                alt="Avatar"
                src={logo}
                sx={{ width: 50, height: 50 }}
                className="sub-avatar"
              />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: '1px solid white' }}
          >
            <span>
              <MenuIcon style={{ color: 'white' }} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Tabs
                  className="menu-sm"
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                  <Tab
                    label="About"
                    {...a11yProps(0)}
                    style={{ color: 'white' }}
                  />
                  <Tab
                    label="Education"
                    {...a11yProps(1)}
                    style={{ color: 'white' }}
                  />
                  <Tab
                    label="EXPERIENCE"
                    {...a11yProps(2)}
                    style={{ color: 'white' }}
                  />
                  <Tab
                    label="Skills"
                    {...a11yProps(3)}
                    style={{ color: 'white' }}
                  />
                  <Tab
                    label="Interests"
                    {...a11yProps(4)}
                    style={{ color: 'white' }}
                  />
                  <Tab
                    label="Awards"
                    {...a11yProps(5)}
                    style={{ color: 'white' }}
                  />
                </Tabs>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Tabs
        id="menu-md-xl"
        className="menu-sm"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="About" {...a11yProps(0)} style={{ color: 'white' }} />
        <Tab label="Education" {...a11yProps(1)} style={{ color: 'white' }} />
        <Tab label="EXPERIENCE" {...a11yProps(2)} style={{ color: 'white' }} />
        <Tab label="Skills" {...a11yProps(3)} style={{ color: 'white' }} />
        <Tab label="Interests" {...a11yProps(4)} style={{ color: 'white' }} />
        <Tab label="Awards" {...a11yProps(5)} style={{ color: 'white' }} />
      </Tabs> */}
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
        }}
      >
        <div className="menu-cv" id="menu-md-dt">
          <div className="avatar">
            <Avatar
              alt="Avatar"
              src={logo}
              sx={{ width: 200, height: 200 }}
              className="sub-avatar"
            />
          </div>
          <Tabs
            className="sub-menu-cv"
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Education" {...a11yProps(1)} />
            <Tab label="EXPERIENCE" {...a11yProps(2)} />
            <Tab label="Skills" {...a11yProps(3)} />
            <Tab label="Interests" {...a11yProps(4)} />
            <Tab label="Awards" {...a11yProps(5)} />
          </Tabs>
        </div>
        <TabPanel value={value} index={0}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Education />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Experience />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Skills />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Interests />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Awards />
        </TabPanel>
      </Box>
    </>
  );
}
