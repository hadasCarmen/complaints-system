import { complaintService } from "../services/complaints.service.js"

export async function addComplaint(req, res) {
    try {
        const { category, message } = req.body

        if (!category || !message) {
            return res.status(400).json({ error: "Missing required fields" })
        }

        const complaint = await complaintService.add({
            category,
            message,
        })

        res.status(201).json(complaint)
    } catch (err) {
        res.status(500).json({ error: "Failed to create complaint" })
    }
}

export async function getComplaints(req, res) {
    try {
        const complaints = await complaintService.query()
        res.json(complaints)
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch complaints" })
    }
}
