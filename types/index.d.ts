export interface EMRRecord {
    patientName: string;
    doctorName: string;
    diagnosis?: string;
    treatment?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  