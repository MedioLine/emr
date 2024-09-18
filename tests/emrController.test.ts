import EMRService from '../src/services/emrService';
import EMRModel from '../src/models/emrModel'; // Mock the model

jest.mock('../src/models/emrModel');

describe('EMRService', () => {
  it('should create a new EMR record', async () => {
    const mockRecord = { id: '123', name: 'John Doe' };
    (EMRModel.prototype.save as jest.Mock).mockResolvedValue(mockRecord);

    const result = await EMRService.createRecord(mockRecord);
    expect(result).toEqual(mockRecord);
  });

  // More tests for each method (getRecordById, updateRecord, deleteRecord)
});
