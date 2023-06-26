import {Box, Button, Stack} from "@mui/material";
import {Form} from "react-final-form";
import FormFieldsConstructor from "../FormFieldsConstructor/FormFieldsConstructor";
import ButtonGroupConstructor from "../ButtonGroupConstructor/ButtonGroupConstructor";

const BaseForm = ({formOptions, dataType, buttonOptions, handlerBack, mutateAction}) => {

  return (
    <Box sx={{padding: '22px', borderRadius: '2px', background: 'white'}}>
      <Form
        onSubmit={formOptions.onSubmit}
        initialValues={formOptions.initValues}
        validate={formOptions.validate}
        render={({handleSubmit, values, form, ...props}) => {
          // handlerRenderForm(values, form);
          return (
            <form onSubmit={handleSubmit} className="base-form-app">
              <Stack direction={'row'} alignItems={'center'}>
                {mutateAction.current === 'view'
                  ? <Button variant={'orange'} onClick={handlerBack}
                            sx={{m: "0", ml: "auto", display: "flex", whiteSpace: 'nowrap'}}>
                    Вернутсья к списку
                  </Button>
                  : <></>}
                <ButtonGroupConstructor options={{...buttonOptions, form}}/>
              </Stack>

              {/*<div style={{marginTop: '16px'}}>*/}
              <FormFieldsConstructor
                options={formOptions}
                values={values}
                form={form}
              />
              {/*</div>*/}
            </form>
          );
        }}
      />
    </Box>
  )
};

export default BaseForm;