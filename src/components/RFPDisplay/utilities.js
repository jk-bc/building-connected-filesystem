function renderDirectory(directory) {
    const {
        id, name, size, lastModified, parentDirectoryId, files, subdirectories
    } = dir;
    return {
     id,
     name,
    }
}
export const convertDirectoriesAndFilesToTree = (directories, files) => {
    /*
        {
            id,
            name,
            size,
            lastModified,
            parentDirectoryId,
            files: [{
                id,
                name,
                size,
                lastModified,
                type
            }],
            subdirectories: [
                .
                .
                .
            ]
        }
    */
   return directories.map((dir, i) => {
       const {
           id, name, size, lastModified, parentDirectoryId, files, subdirectories
       } = dir;
       return {
        id,
        name,
       }
   })


}