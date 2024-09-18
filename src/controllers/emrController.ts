import { Request, Response } from 'express';
import EMRService from '../services/emrService';

export const getEMRRecord = async (req: Request, res: Response) => {
  try {
    const recordId = req.params.id;
    const record = await EMRService.getRecordById(recordId);
    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }
    return res.status(200).json(record);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEMRRecord = async (req: Request, res: Response) => {
  try {
    const recordData = req.body;
    const newRecord = await EMRService.createRecord(recordData);
    return res.status(201).json(newRecord);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEMRRecord = async (req: Request, res: Response) => {
  try {
    const recordId = req.params.id;
    const updatedData = req.body;
    const updatedRecord = await EMRService.updateRecord(recordId, updatedData);
    if (!updatedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    return res.status(200).json(updatedRecord);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEMRRecord = async (req: Request, res: Response) => {
  try {
    const recordId = req.params.id;
    const deleted = await EMRService.deleteRecord(recordId);
    if (!deleted) {
      return res.status(404).json({ message: 'Record not found' });
    }
    return res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllEMRRecords = async (req: Request, res: Response) => {
  try {
    const filter = req.query || {};
    const records = await EMRService.getAllRecords(filter);
    return res.status(200).json(records);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
