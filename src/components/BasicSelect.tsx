import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {type SelectChangeEvent} from '@mui/material/Select';
import {useState} from 'react';
import {allDepartaments} from '../data/allDepartaments';

export default function BasicSelect() {
     const [age, setAge] = useState<string>('');

     const handleChange = (event: SelectChangeEvent) => {
          setAge(event.target.value as string);
     };

     return (
          <Box sx={{minWidth: 120}}>
               <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                         Selecione um departamento
                    </InputLabel>
                    <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         value={age}
                         label="Age"
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
