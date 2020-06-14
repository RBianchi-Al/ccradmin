import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Form from "../../Components/Form";
import FormPosto from "../Form copy";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    backgroundColor: theme.palette.background.paper,
    marginLeft: 90,
    marginRight: 100,
  },
}));

export default function Abas() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Usuários" {...a11yProps(0)} />
          <Tab label="Consulta" {...a11yProps(1)} />
          <Tab label="Perigo" {...a11yProps(2)} />
          <Tab label="Saúde" {...a11yProps(3)} />
          {/* <Tab label="Postos de Atendimento" {...a11yProps(4)} />
          <Tab label="Saúde" {...a11yProps(5)} />
          <Tab label="Contatos para ajuda" {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Form />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormPosto />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Form />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Form />
      </TabPanel>
      {/* <TabPanel value={value} index={4}>
      Inserir Formulário de Cadastro 5
      </TabPanel>
      <TabPanel value={value} index={5}>
      Inserir Formulário de Cadastro 6
      </TabPanel>
      <TabPanel value={value} index={6}>
      Inserir Formulário de Cadastro 7
      </TabPanel> */}
    </div>
  );
}
