import EMRModel from '../models/emrModel';
import { EMRRecord } from '../types/index.d.ts'; // Assuming EMRRecord is a type you defined

class EMRService {
  
  // Get EMR record by ID
  async getRecordById(recordId: string): Promise<EMRRecord | null> {
    try {
      const record = await EMRModel.findById(recordId);
      return record;
    } catch (error) {
      throw new Error(`Unable to retrieve record: ${error.message}`);
    }
  }

  // Create a new EMR record
  async createRecord(recordData: EMRRecord): Promise<EMRRecord> {
    try {
      const newRecord = new EMRModel(recordData);
      return await newRecord.save();
    } catch (error) {
      throw new Error(`Unable to create record: ${error.message}`);
    }
  }

  // Update an existing EMR record
  async updateRecord(recordId: string, updatedData: Partial<EMRRecord>): Promise<EMRRecord | null> {
    try {
      const updatedRecord = await EMRModel.findByIdAndUpdate(recordId, updatedData, { new: true });
      return updatedRecord;
    } catch (error) {
      throw new Error(`Unable to update record: ${error.message}`);
    }
  }

  // Delete an EMR record
  async deleteRecord(recordId: string): Promise<boolean> {
    try {
      await EMRModel.findByIdAndDelete(recordId);
      return true;
    } catch (error) {
      throw new Error(`Unable to delete record: ${error.message}`);
    }
  }

  // Get all EMR records (with optional filtering)
  async getAllRecords(filter: Partial<EMRRecord> = {}): Promise<EMRRecord[]> {
    try {
      const records = await EMRModel.find(filter);
      return records;
    } catch (error) {
      throw new Error(`Unable to retrieve records: ${error.message}`);
    }
  }
}

export default new EMRService();
