"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  name: string;
};

export default function ProductGallery({
  images,
  name,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex gap-6">

      {/* Thumbnails */}

      <div className="flex flex-col gap-4">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-xl border-2 transition

            ${
              selectedImage === image
                ? "border-pink-600"
                : "border-gray-200"
            }`}
          >

            <Image
              src={image}
              alt={name}
              width={90}
              height={90}
              className="h-20 w-20 object-cover"
            />

          </button>

        ))}

      </div>

      {/* Main Image */}

      <div className="flex-1">

        <Image
          src={selectedImage}
          alt={name}
          width={700}
          height={700}
          className="rounded-3xl bg-white shadow-xl"
        />

      </div>

    </div>
  );
}