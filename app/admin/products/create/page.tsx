import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { fa, faker } from "@faker-js/faker";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";

const createProductAction = async (FormData: FormData) => {
  "use server";
  const name = FormData.get("name") as string;
  console.log(name);
};

const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
      <div className="p-8 border rounded-md">
        <form action={createProductAction}>
          <FormInput
            type="text"
            name="name"
            label="product name"
            defaultValue={name}
          />
          <PriceInput />
          {/* <ImageInput /> */}
          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CreateProductPage;
