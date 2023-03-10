const express = require('express')
const router = express.Router()
const data = require('../data')

let currentDataID = 3

router.get('/', (req, res) => {
    res.json(data)
})

router.get('/:id', (req, res) => {
    // console.log(req.params.id)
    const urlId = Number.parseInt(req.params.id, 10) // !แปลง params.id ที่เป็น String จาก URL ให้เป็น Number , โดย set เป็นเลขฐาน 10
    const order = data.find((order) => order.id === urlId)
    res.json(order)

})


router.post('/', (req, res) => {
    // console.log(req.body)
    currentDataID += 1 // gen id order
    const newObjectData = {
        id: currentDataID,
        ...req.body
    };
    data.push(newObjectData)
    res.json(newObjectData)
})

router.put('/:id', (req, res) => {
    const urlId = Number.parseInt(req.params.id, 10) // !แปลง params.id ที่เป็น String จาก URL ให้เป็น Number , โดย set เป็นเลขฐาน 10
    const OrderIndex = data.findIndex((order) => order.id === urlId)
    const updateData = {
        id: urlId,
        ...req.body
    }
    data[OrderIndex] = updateData
    res.json(updateData)
})

router.delete('/:id', (req, res) => {
    const urlId = Number.parseInt(req.params.id, 10) // !แปลง params.id ที่เป็น String จาก URL ให้เป็น Number , โดย set เป็นเลขฐาน 10
    const OrderIndex = data.findIndex((order) => order.id === urlId)
    data.splice(OrderIndex, 1) // splice เป็นการลบข้ออมูลอออกจาก index
    res.sendStatus(204)
})

module.exports = router;