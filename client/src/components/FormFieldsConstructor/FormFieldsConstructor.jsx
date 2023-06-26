import React from "react";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {ru} from "date-fns/locale";
import {
  TextField,
  Checkboxes,
  Switches,
  Radios,
  Select,
  DatePicker,
  TimePicker,
  DateTimePicker,
  Autocomplete,
} from "mui-rff";
import {Field} from "react-final-form";
import {Box, Button, FormControl, InputAdornment, InputLabel, Typography, MenuItem, Grid} from "@mui/material";


const FormFieldsConstructor = ({options, values, form}) => {

  const getField = (field, values) => {
    let fieldProps = {...field.props};
    let fieldName = fieldProps.name;
    let value = values[fieldName];
    let listLabel = field.listLabel;
    let text = options.text;


    if (!options) return null;

    if (!options.buttonOfField) options.buttonOfField = {select: {}, clear: {}};

    if (options.disabledAll) fieldProps.disabled = true;

    if (options.disabledFields && options.disabledFields[fieldName]) fieldProps.disabled = true;

    switch (field.component) {
      case 'TextField':
        return <FormControl variant="standard" required fullWidth>
          <TextField
            {...fieldProps}
            sx={{margin: "normal"}}
            autoComplete={fieldName}
            inputProps={{
              maxLength: options.maxLength
                ? options.maxLength[fieldName]
                : 1024,
            }}
          />
        </FormControl>;

      case "DatePicker":
      case "TimePicker":
        return (
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={ru}
          >
            {field.component === "DatePicker" ? (
              <DatePicker {...fieldProps} inputFormat="dd/MM/yyyy"/>
            ) : (
              <TimePicker
                {...fieldProps}
                ampm={false}
                inputFormat="HH:mm:ss"
                mask="__:__:__"
                views={["hours", "minutes", "seconds"]}
              />
            )}
          </LocalizationProvider>
        );

      case "DateTimePicker":
        return (
          <Field {...fieldProps}>
            {(props) => {
              return (
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  adapterLocale={ru}
                >
                  <DateTimePicker
                    {...props.input}
                    {...props}
                    {...fieldProps}
                    inputFormat="dd/MM/yyyy HH:mm"
                    sx={{backgroundColor: "blue"}}
                    onChange={(date) => {
                      let convertDate =
                        new Date(date) != "Invalid Date"
                          ? new Date(date).toISOString()
                          : "Invalid Date";
                      if (convertDate === "1970-01-01T00:00:00.000Z")
                        convertDate = null;
                      props.input.onChange(convertDate);
                    }}
                    ampm={false}
                  />
                </LocalizationProvider>
              );
            }}
          </Field>
        );

      case "Autocomplete":
        if (fieldProps.multiple && !value) value = [];
        if (fieldProps.multiple && fieldProps.required && value.length)
          fieldProps.required = false;
        const fixValue = (value) => {
          let max = fieldProps.max;
          const filter = (elem, i, array) => !!elem &&
            (max ? (array.length - (+max + 1) < i) : true)
          return (fieldProps.multiple && value?.length >= 2)
            ? value.filter(filter) : value;
        }

        return (
          <Autocomplete
            {...fieldProps}
            value={fixValue(value)}
            // open={true}
            options={options.data[fieldName] || []}
            getOptionLabel={(option) =>
              `${text ? text[option[listLabel]] : option[listLabel] || option}`
            }
            isOptionEqualToValue={(option, value) => {
              return option[listLabel] === value[listLabel]
            }
            }
            // disableCloseOnSelect={fieldProps.multiple}
            disableCloseOnSelect={true}
            getOptionDisabled={() =>
              options.disableOptions && options.disableOptions[fieldName]
            }
            onInputChange={(e) => {
              if (fieldProps.freeSolo && e) {
                form.change(fieldName, {
                  [listLabel]: e.target.textContent || e.target.value,
                });
              }
              if (e) {
                options?.onInputChange &&
                options.onInputChange(e, fieldName, e.target.value);
              }
            }}
            renderOption={(props) => {
              // console.log(props)
              return (
                <Box component="li" {...props} key={props.id || props.key}>
                  {props.key}
                </Box>
              );
            }}
          />
        );

    }
  };

  return (
    <Grid container spacing={options.spacing || 2} sx={{ marginTop: 0 }}>
      {options.fields?.map((field) =>
        options.removeFields &&
        options.removeFields[field.props.name] ? null : (
          <Grid
            key={field.props.name}
            item
            xs={field.size}
            className={field.props.name}
            sx={{
              display: "flex",
              "& .MuiAutocomplete-root": {width: "100%"},
              "& .Mui-error fieldset": values[field.props.name] === null && {
                borderColor: "#76768f !important",
              },
              "& .Mui-disabled.Mui-error fieldset": values[field.props.name] === null && {
                borderColor: "#c4c4d791 !important",
              },
              "& label.Mui-error.Mui-disabled": values[field.props.name] === null && {
                color: "#a2a2b5ed",
              },
              "& label.Mui-error": values[field.props.name] === null && {
                color: "#676783",
              },
              "& label.Mui-error span": values[field.props.name] === null && {
                color: "#676783",
              },
              "& label.Mui-error.Mui-disabled span": values[field.props.name] === null && {
                color: "#a2a2b5ed",
              },
            }}
          >
            {getField(field, values)}

            {/*{options.buttonOfField.select[field.props.name] && (*/}
            {/*  <Button*/}
            {/*    name={`${field.props.name}_select_btn`}*/}
            {/*    variant={"lilac"}*/}
            {/*    sx={{height: "100%", borderRadius: "4px", minWidth: 'auto', padding: '10px'}}*/}
            {/*    onClick={options.buttonOfField.select[field.props.name].handler}*/}
            {/*  >*/}
            {/*    /!*{options.buttonOfField.select[field.props.name].title}*!/*/}
            {/*    <SearchIcon viewBox="0 0 19 20" sx={{fontSize: '18px'}} htmlColor="transparent" />*/}
            {/*  </Button>*/}
            {/*)}*/}
            {/*{options.buttonOfField.clear && options.buttonOfField.clear[field.props.name] && (*/}
            {/*  <Button*/}
            {/*    name={`${field.props.name}_clear_btn`}*/}
            {/*    variant={"lilac"}*/}
            {/*    sx={{height: "100%", borderRadius: "4px", minWidth: 'auto', padding: '10px'}}*/}
            {/*    onClick={options.buttonOfField.clear[field.props.name].handler}*/}
            {/*  >*/}
            {/*    <TrashIcon viewBox="0 0 17 18" sx={{fontSize: '18px'}} htmlColor="transparent" />*/}
            {/*  </Button>*/}
            {/*)}*/}
          </Grid>
        )
      )}
    </Grid>
  );
};

export default FormFieldsConstructor;