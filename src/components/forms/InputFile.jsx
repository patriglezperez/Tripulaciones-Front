import { useState, useEffect } from "react";
import { storage } from "../../utils/firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default function InputFile({ setImageUrl }) {
  const [url, setUrl] = useState("");
  //Method to handle the file upload
  useEffect(() => {
    if (url) {
      setImageUrl(url);
    }
  }, [url]);
  const handleFileUpload = async (e) => {
    if (e.target.files[0] == null) return;
    const file = e.target.files[0];
    const imageRef = ref(storage, `images/${file.name}${Date.now()}`);
    const uploadImage = await uploadBytes(imageRef, file);
    setUrl(await getDownloadURL(uploadImage.ref));
  };

  return (
    <div>
      <input type="file" name="file" id="file" onChange={handleFileUpload} />
    </div>
  );
}
