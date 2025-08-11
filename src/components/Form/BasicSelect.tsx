import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {type SelectChangeEvent} from '@mui/material/Select';
import {useState} from 'react';
import {dataBasicSelect} from '@data/dataBasicSelect';

export default function BasicSelect() {
     const [departament, setDepartament] = useState<string>('');

     const handleChange = (event: SelectChangeEvent) => {
          setDepartament(event.target.value as string);
     };

     return (
          <Box sx={{minWidth: 120}}>
               <FormControl fullWidth variant="standard">
                    <InputLabel id="demo-simple-select-label">
                         {dataBasicSelect.selectLabel}
                    </InputLabel>
                    <Select
                         labelId="demo-simple-select-label"
                         id="departament-simple-select"
                         value={departament}
                         label="Selecione um departamento"
                         onChange={handleChange}>
                         {dataBasicSelect.allDepartaments.map((el) => (
                              <MenuItem key={el.index} value={el.departament}>
                                   {el.departament}
                              </MenuItem>
                         ))}
                    </Select>
               </FormControl>
          </Box>
     );
}
