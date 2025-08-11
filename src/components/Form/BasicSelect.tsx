import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {type SelectChangeEvent} from '@mui/material/Select';
import {useState} from 'react';
import {allDepartaments, selectLabel} from '@data/datasSelect';

export default function BasicSelect() {
     const [age, setAge] = useState<string>('');

     const handleChange = (event: SelectChangeEvent) => {
          setAge(event.target.value as string);
     };

     return (
          <Box sx={{minWidth: 120}}>
               <FormControl fullWidth variant="standard">
                    <InputLabel id="demo-simple-select-label">
                         {selectLabel}
                    </InputLabel>
                    <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         value={age}
                         label="Selecione um departamento"
                         onChange={handleChange}>
                         {allDepartaments.map((el) => (
                              <MenuItem key={el.index} value={el.departament}>
                                   {el.departament}
                              </MenuItem>
                         ))}
                    </Select>
               </FormControl>
          </Box>
     );
}
