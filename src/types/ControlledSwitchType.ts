export type ControlledSwicthType = {
     text: string;
     checked: boolean;
     onChange: (
          event: React.ChangeEvent<HTMLInputElement>,
          checked: boolean
     ) => void;
};
