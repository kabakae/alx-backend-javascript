const createInt8TypedArray = (length, position, value) => {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  
  // Create a DataView to work with the ArrayBuffer
  const dataView = new DataView(buffer);
  
  // Check if the position is within the valid range
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  
  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);
  
  // Return the DataView
  return dataView;
};

export default createInt8TypedArray;

