import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Upload from '../Postos'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
  })
);
const currencies = [
  {
    value: "São Paulo",
    label: "São Paulo",
  },
  {
    value: "Minas Gerais",
    label: "Minas Gerais",
  },
  {
    value: "Rio de Janeiro",
    label: "Rio de Janeiro",
  },
  {
    value: "Maranhão",
    label: "Maranhão",
  },
];

export default function FormPosto() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
    console.log(currency)
  };
  console.log(handleChange)

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="outlined-full-width"
          label="Posto:"
          style={{ margin: 8 }}
          placeholder=" "
          helperText=" "
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          label="Latitude"
          id="outlined-margin-normal"
          defaultValue=" "
          className={classes.textField}
          helperText="Somente números"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Longitude"
          id="outlined-margin-normal"
          defaultValue="  "
          className={classes.textField}
          helperText=" "
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Telefone"
          id="outlined-margin-normal"
          defaultValue="( )"
          className={classes.textField}
          helperText=" "
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Estado"
          select
          id="outlined-margin-normal"
          defaultValue=" "
          className={classes.textField}
          helperText=" "
          margin="normal"
          variant="outlined"
          SelectProps={{
            native: true,
          }}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          label="Restaurante"
          id="outlined-margin-normal"
          defaultValue=" "
          className={classes.textField}
          helperText="Somente números"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Dormitórios"
          id="outlined-margin-normal"
          defaultValue="  "
          className={classes.textField}
          helperText=" "
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Banheiro com chuveiro"
          id="outlined-margin-normal"
          defaultValue=" "
          className={classes.textField}
          helperText=" "
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Latitude"
          id="outlined-margin-normal"
          defaultValue=" "
          className={classes.textField}
          helperText="Somente números"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Longitude"
          id="outlined-margin-normal"
          defaultValue="  "
          className={classes.textField}
          helperText=" "
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Lazer"
          id="outlined-margin-normal"
          defaultValue=" "
          className={classes.textField}
          helperText=" "
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-full-width"
          label="Descrição do posto"
          style={{ margin: 8 }}
          placeholder="  "
          helperText=" "
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Upload/>
      </div>
    </div>
  );
}
