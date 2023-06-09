import { AppBar, Box, Button, Container, Divider, Grid, Stack, Toolbar, Typography } from "@mui/material";
import { theme } from "./types/theme";

import computer from "../public/computer.gif"

import computerSvg from "../public/computer.svg"

import hands from "../src/assets/hands.gif"
import programming from "../src/assets/programming.gif"

import hands2 from "../src/assets/hands.svg"

import coding from "../src/assets/coding.jpg"



import coding2 from "../public/coding2.svg"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DownloadIcon from '@mui/icons-material/Download';

import { SiTypescript, SiReact, SiJavascript, SiHtml5, SiCss3, SiGithub, SiGit, SiStyledcomponents, SiSass, SiNextdotjs, SiMui, SiBootstrap, SiTailwindcss, SiFigma } from 'react-icons/si';

import IconButton from '@mui/material/IconButton';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';


import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";
import { Logo, NavBar, MainContent, AboutMe, Skills, SkillCard, Portfolio, ProjectCard, Contact, ContactContent } from "./styles";

import logo from "../public/logo.svg";

interface PortfolioProps {
    id: number,
    name: string,
    description: string,
    gitHubUrl: string,
    siteUrl: string,
    image: string,
}

export function Home() {

    const portfolio : PortfolioProps[] = [
        {
            id: 1,
            name: "Coffee Shop",
            description: "Descrição do projeto. Henrique Lourenço da silva. Wanessa Pote, a potinho.",
            gitHubUrl: "https://github.com/LourencoHenri/coffeeShop",
            siteUrl: "https://github.com/LourencoHenri/coffeeShop",
            image: "https://img.freepik.com/fotos-gratis/fundo-de-armazenamento-em-nuvem-remixado-do-dominio-publico-pela-nasa_53876-104240.jpg?w=1390&t=st=1684722928~exp=1684723528~hmac=65d58cea32c3485f3fb2a0c59247290c29e6318a1945851dd8b8739441750006",
        },
        {
            id: 2,
            name: "Pomodoro Timer",
            description: "Descrição do projeto. Henrique Lourenço da silva. Wanessa Pote, a potinho.",
            gitHubUrl: "https://github.com/LourencoHenri/pomodoroTimer",
            siteUrl: "https://github.com/LourencoHenri/pomodoroTimer",
            image: "https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-de-rede-5g-com-linha-digital-azul_53876-119505.jpg?size=626&ext=jpg&ga=GA1.1.1049139390.1684335736&semt=sph",
        },
        {
            id: 3,
            name: "Feed",
            description: "Descrição do projeto. Henrique Lourenço da silva. Wanessa Pote, a potinho.",
            gitHubUrl: "https://github.com/LourencoHenri/feed",
            siteUrl: "https://github.com/LourencoHenri/feed",
            image: "https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1390&t=st=1684722782~exp=1684723382~hmac=a272128d1cea39a87a6a828d5adf4a3e423341028b2b972dd6d30cef041da769",
        },
        {
            id: 4,
            name: "ToDo List",
            description: "Descrição do projeto. Henrique Lourenço da silva. Wanessa Pote, a potinho.",
            gitHubUrl: "https://github.com/LourencoHenri/toDoList",
            siteUrl: "https://github.com/LourencoHenri/toDoList",
            image: "https://img.freepik.com/fotos-gratis/fundo-de-programacao-com-html_23-2150038863.jpg?size=626&ext=jpg&ga=GA1.2.1049139390.1684335736&semt=sph",
        },
        {
            id: 5,
            name: "Shop",
            description: "Descrição do projeto. Henrique Lourenço da silva. Wanessa Pote, a potinho.",
            gitHubUrl: "https://github.com/LourencoHenri/Shop",
            siteUrl: "https://github.com/LourencoHenri/Shop",
            image: "https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010125.jpg?w=1390&t=st=1684722821~exp=1684723421~hmac=4fbedd7d45fc5efd3d695757896b8da9538913d8ad67878f02532085a12fca68",
        },
        {
            id: 6,
            name: "Calculator",
            description: "Descrição do projeto. Henrique Lourenço da silva. Wanessa Pote, a potinho.",
            gitHubUrl: "https://github.com/LourencoHenri/calculator",
            siteUrl: "https://github.com/LourencoHenri/calculator",
            image: "https://img.freepik.com/fotos-gratis/programador-profissional-trabalhando-ate-tarde-no-escritorio-escuro_1098-18705.jpg?w=1390&t=st=1684722836~exp=1684723436~hmac=c3d5dbb990c23f0116b61052573978690abd97b7430deb83b04bef66b092b5a7",
        },
    ]

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    console.log(portfolio)

    return (
        <Container>
            <AppBar sx={{ backgroundColor: "transparent" }}>
                <NavBar>
                    <Logo>
                        <img src={logo} alt="" />
                    </Logo>
                    <Tabs value={value} onChange={handleChange} centered >
                        <Tab label="Home" />
                        <Tab label="About" />
                        <Tab label="Skills" />
                        <Tab label="Portfolio" />
                        <Tab label="Contact" />
                    </Tabs>
                </NavBar>
            </AppBar>

            <MainContent>
                <Box>
                    <Typography variant="h1" sx={{ color: "primary.main", fontWeight: "bold" }} >
                        Hello
                        <Typography variant="h1" component="span" sx={{ color: "primary.contrastText", fontWeight: "bold" }} >
                            .
                        </Typography>
                    </Typography>
                    <Typography variant="h4" sx={{ }} >I'm Henrique Lourenço</Typography>
                    <Typography variant="h6" sx={{ }} >Web Developer</Typography>
                </Box>
                <Box>
                    <img src={hands} alt="" />
                </Box>
            </MainContent>

            <AboutMe>
                <Box>
                    <img src={programming} alt="" />
                </Box>

                <Box>
                    <Typography variant="h4" sx={{ color: "primary.contrastText", fontWeight: "bold" , span: { color: "primary.main" } }} >
                        About <span>me</span>
                    </Typography>
                    <Typography variant="body1" >
                    My name is Henrique Lourenço, I live in Santos, Brazil. Currently I study programming to learn and increase my skills.I'm enthusiast of programming technologies. I think everything provided is fantastic. I like the lifelong learning style, I always want to improve and acquire knowledge.
                    </Typography>
                </Box>
            </AboutMe>

            <Skills>
                <Typography variant="h4" sx={{ color: "primary.contrastText", fontWeight: "bold", marginBottom: theme.spacing(4) , span: { color: "primary.main" } }} >
                    My <span>Skills</span>
                </Typography>

                <Typography variant="h6" sx={{ color: "primary.contrastText" }} >
                    Frameworks
                </Typography>
                <Box>
                    <SkillCard>
                        <SiReact size={48} />
                        <span>
                            React
                        </span>
                    </SkillCard>
                    <SkillCard>
                        <SiNextdotjs size={48} />
                        <span>
                            Next
                        </span>
                    </SkillCard>
                </Box>                

                <Typography variant="h6" sx={{ color: "primary.contrastText" }} >
                    Systems and platforms
                </Typography>
                <Box>
                    <SkillCard>
                        <SiGithub size={48} />
                        <span>
                            GitHub
                        </span>
                    </SkillCard>
                    <SkillCard>
                        <SiGit size={48} />
                        <span>
                            Git
                        </span>
                    </SkillCard>
                    <SkillCard>
                        <SiFigma size={48} />
                        <span>
                            Figma
                        </span>
                    </SkillCard>
                </Box>

                <Typography variant="h6" sx={{ color: "primary.contrastText" }} >
                    Styles
                </Typography>
                <Box>
                    <SkillCard>
                        <SiMui size={48} />
                        <span>
                            MUI
                        </span>
                    </SkillCard>
                    <SkillCard>
                        <SiBootstrap size={48} />
                        <span>
                            Bootstrap
                        </span>
                    </SkillCard>
                    <SkillCard>
                        <SiStyledcomponents size={48} />
                        <span>
                            Styled Components
                        </span>
                    </SkillCard>
                    <SkillCard>
                        <SiTailwindcss size={48} />
                        <span>
                            Tailwind
                        </span>
                    </SkillCard>
                </Box>

                <Typography variant="h6" sx={{ color: "primary.contrastText" }} >
                    Languages
                </Typography>
                <Box>
                    <SkillCard>
                        <SiTypescript size={48} />
                        <span>
                            TypesScript
                        </span>
                    </SkillCard>
                    <SkillCard>
                        <SiJavascript size={48} />
                        <span>
                            JavaScript
                        </span>
                    </SkillCard>
                    <SkillCard>
                        <SiHtml5 size={48} />
                        <span>
                            HTML5
                        </span>
                    </SkillCard>
                    <SkillCard>
                        <SiCss3 size={48} />
                        <span>
                            CSS3
                        </span>
                    </SkillCard>
                    <SkillCard>
                        <SiSass size={48} />
                        <span>
                            Sass
                        </span>
                    </SkillCard>
                </Box>

            </Skills>

            <Portfolio sx={{ marginTop: theme.spacing(12) }} >

                <Typography variant="h4" sx={{ color: "primary.contrastText", fontWeight: "bold" , mb: theme.spacing(2) , span: { color: "primary.main" } }} >
                    Portfolio
                </Typography>

                <Typography variant="subtitle1" sx={{ span: { color: "primary.main" }, width: "50%", textAlign: "center"}}  >
                    Press <span>access</span> to visit the project page or the <span>GitHub icon</span> to access the project in my repository.
                </Typography>

                <Grid container spacing={6} sx={{ marginTop: theme.spacing(0) }}  >

                    {portfolio.map((project) => (
                        <Grid item xs={4} key={project.id} >
                            <ProjectCard sx={{  }}>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 150 }}
                                    image={project.image}
                                    title={project.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="primary.contrastText" sx={{ }} >
                                    {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="primary.contrastText">
                                    {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: "flex", justifyContent: "space-between", width: "100%",}} >
                                    <Button size="small" sx={{ color: "primary.contrastText", "&:hover": { color: "primary.main" } }} >Access</Button>
                                    <IconButton sx={{ color: "primary.contrastText", transition: "0.4s", "&:hover": { color: "primary.main" } }} >
                                        <SiGithub />
                                    </IconButton>
                                </CardActions>
                            </ProjectCard>
                        </Grid>
                    ))}

                </Grid>

            </Portfolio>

            <Contact>
                <Typography  variant="h4" sx={{ color: "primary.contrastText", fontWeight: "bold", marginBottom: theme.spacing(10), display: "flex", justifyContent: "center"}} >
                    Contact
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between" }} >

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", gap: theme.spacing(2) }} >

                        <ContactContent href="https://www.linkedin.com/in/henrique-lourenco/" target="_blank" >
                            <LinkedInIcon fontSize="large" />
                            <Typography>Henrique Lourenço</Typography>
                        </ContactContent>

                        <ContactContent href="https://github.com/LourencoHenri" target="_blank" >
                            <GitHubIcon fontSize="large"  />
                            <Typography>LourencoHenri</Typography>
                        </ContactContent>

                        <ContactContent sx={{ cursor: "default" }} >
                            <EmailIcon fontSize="large"  />
                            <Typography>henri.lourenco@outlook.com</Typography>
                        </ContactContent>

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column"}} >
                        <Typography variant="h4" >
                            Contact me
                        </Typography>
                        <Typography variant="h2" sx={{ color: "primary.main", fontWeight: "bold" }} >
                            Let's work together
                        <Typography variant="h2" component="span" sx={{ color: "primary.contrastText", fontWeight: "bold" }} >
                            !
                        </Typography>
                    </Typography>
                    </Box>
                </Box>
            </Contact>

        </Container>
    )
}

/*----------------------------------------------------------------

<Skills sx={{ }}>

                <Box sx={{ display: "flex", width: "90%" }} >
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"  }} >
                        <Typography variant="h6" sx={{ color: "primary.contrastText" }} >
                            Frameworks
                        </Typography>
                        <Box sx={{ display: "flex" }} >
                            <SkillCard>
                                <SiReact size={48} />
                                <span>
                                    React
                                </span>
                            </SkillCard>
                            <SkillCard>
                                <SiNextdotjs size={48} />
                                <span>
                                    Next
                                </span>
                            </SkillCard>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <Typography variant="h6" sx={{ color: "primary.contrastText" }} >
                            Languages
                        </Typography>
                        <Box>
                            <SkillCard>
                                <SiTypescript size={48} />
                                <span>
                                    TypesScript
                                </span>
                            </SkillCard>
                            <SkillCard>
                                <SiJavascript size={48} />
                                <span>
                                    JavaScript
                                </span>
                            </SkillCard>
                            <SkillCard>
                                <SiHtml5 size={48} />
                                <span>
                                    HTML5
                                </span>
                            </SkillCard>
                            <SkillCard>
                                <SiCss3 size={48} />
                                <span>
                                    CSS3
                                </span>
                            </SkillCard>
                            <SkillCard>
                                <SiSass size={48} />
                                <span>
                                    Sass
                                </span>
                            </SkillCard>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", width: "90%" }} >
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <Typography variant="h6" sx={{ color: "primary.contrastText" }} >
                            Systems and platforms
                        </Typography>
                        <Box>
                            <SkillCard>
                                <SiGithub size={48} />
                                <span>
                                    GitHub
                                </span>
                            </SkillCard>
                            <SkillCard>
                                <SiGit size={48} />
                                <span>
                                    Git
                                </span>
                            </SkillCard>
                            <SkillCard>
                                <SiFigma size={48} />
                                <span>
                                    Figma
                                </span>
                            </SkillCard>
                        </Box>
                    </Box>

                    <Divider />

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                        <Typography variant="h6" sx={{ color: "primary.contrastText" }} >
                        Styles
                        </Typography>
                        <Box>
                            <SkillCard>
                                <SiMui size={48} />
                                <span>
                                    MUI
                                </span>
                            </SkillCard>
                            <SkillCard>
                                <SiBootstrap size={48} />
                                <span>
                                    Bootstrap
                                </span>
                            </SkillCard>
                            <SkillCard>
                                <SiStyledcomponents size={48} />
                                <span>
                                    Styled Components
                                </span>
                            </SkillCard>
                            <SkillCard>
                                <SiTailwindcss size={48} />
                                <span>
                                    Tailwind
                                </span>
                            </SkillCard>
                        </Box>
                    </Box>
                </Box>              
            </Skills>

            */