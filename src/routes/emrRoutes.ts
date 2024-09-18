import { Router } from 'express';
import { getEMRRecord, createEMRRecord, updateEMRRecord, deleteEMRRecord, getAllEMRRecords } from '../controllers/emrController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Public route
router.get('/records/:id', getEMRRecord);

// Protected routes (require auth)
router.post('/records', authMiddleware, createEMRRecord);
router.put('/records/:id', authMiddleware, updateEMRRecord);
router.delete('/records/:id', authMiddleware, deleteEMRRecord);
router.get('/records', getAllEMRRecords);

export default router;
