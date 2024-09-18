export const formatRecord = (record: any) => {
    // Some logic to format record
    return {
      ...record,
      fullName: `${record.firstName} ${record.lastName}`,
    };
  };
  
  export const validateRecord = (record: any) => {
    if (!record.patientName || !record.doctorName) {
      throw new Error('Missing required fields');
    }
    return true;
  };
  