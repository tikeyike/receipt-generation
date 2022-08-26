'use strict'

const OneBlink = require('@oneblink/sdk')
const QRCode = require('qrcode')

const opts = {
  width: 200,
  margin: 2,
}

module.exports.post = async function (req, res) {
  const receipt = req.body.submission.externalId
  const message = `mailto: support@oneblink.io?subject=Receipt Number: ${receipt}`

  const generatedURI = await QRCode.toDataURL(message, opts)

  let elements = []
  const qrcode = OneBlink.Forms.generateFormElement({
    type: 'image',
    name: 'qrcode',
    label: 'qrcode',
    defaultValue: generatedURI,
  })
  elements.push(qrcode)

  return res.setStatusCode(200).setPayload(elements)
}
