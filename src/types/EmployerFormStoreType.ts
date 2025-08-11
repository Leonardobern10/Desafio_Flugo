import type {EmployerFormDataType} from './EmployerFormDataType';

export type EmployerFormStoreType = {
     formData: EmployerFormDataType;
     setFormData: (newData: EmployerFormDataType) => void;
     resetForm: () => void;
};
