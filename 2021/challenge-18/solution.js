export function fixFiles(files) {
  return files.map((file, index) => {
    const slicedFiles = files.slice(0, index)
    return slicedFiles.includes(file) ? file + '(' + slicedFiles.filter(filteredFile => filteredFile === file).length + ')' : file
  })
}
