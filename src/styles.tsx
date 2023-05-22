import { styled } from "@mui/material";

import { AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography, Card } from "@mui/material";
import { theme } from "./types/theme";

export const NavBar = styled(Toolbar)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    opacity: 0.97,
    display: "flex",
    justifyContent: "space-between",

    "button": {
        color: theme.palette.primary.contrastText,
    }
}))

export const Logo = styled(Typography)(({theme}) => ({
    
}))

export const MainContent = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    color: theme.palette.primary.contrastText,
}))

export const AboutMe = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "div": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "50vh",
        gap: theme.spacing(2),

        "&:last-child": {
            color: theme.palette.primary.contrastText,
            textAlign: "center",
        },
    },
}))

export const Skills = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    marginTop: theme.spacing(8),

    "div": {
        color: theme.palette.primary.contrastText,
        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
        marginBottom: theme.spacing(6),
        marginTop: theme.spacing(2),
    }
}))

export const SkillCard = styled("a")(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: theme.spacing(12),

    cursor: "pointer",
    transition: "1s",

    "&:hover": {
        color: theme.palette.primary.main,
        transition: "0.2s",
    },

    "span": {
        marginTop: theme.spacing(1),
        textAlign: "center",
    },
}))

export const Portfolio = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
}))

export const ProjectCard = styled(Card)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: theme.palette.secondary.light,

}))

export const Contact = styled(Box)(({theme}) => ({
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(16),
    marginBottom: theme.spacing(26),
}))

export const ContactContent = styled("a")(({theme}) => ({
    display: 'flex',
    gap: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
    transition: "0.2s",

    "&:hover": {
        color: theme.palette.primary.main,
    }
}))