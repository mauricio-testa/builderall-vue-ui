export const copyToClipboard = text => {
  const tempInput = document.createElement('input')
  tempInput.style = 'position: absolute; left: -1000px; top: -1000px'
  tempInput.value = text
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand('copy')
  document.body.removeChild(tempInput)
}

export const previewUpload = data => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(data)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export const hasProperty = (object, key) => {
  return Object.prototype.hasOwnProperty.call(object, key)
}
