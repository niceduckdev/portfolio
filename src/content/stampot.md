---
title: Stampot
description: Online ordering platform for Chiro Stam.
tags: ["vue", "pocketbase", "tailwind"]
image: home.webp
date: 2025-10-25
hidden: true
---

Every year, Chiro Stam hosts an event where members and their families can come together to enjoy a delicious spaghetti meal.

This tradition has been running for about 15 years. In the past, registrations were handled through a Google Form, while orders were managed on paper using a rather complicated system.

I built an application using VueJS, PocketBase, and Tailwind CSS to simplify the process of placing and tracking orders.

# Frontend
The frontend was developed with VueJS and a custom component library, designed specifically for Chiro Stam, and styled entirely with Tailwind.

```
<Section title="Persoonlijke informatie">
    <Grid>
        <Input :disabled="true" label="Code">
            {{ registration.code.toUpperCase() }}
        </Input>

        <Select v-model="registration.paid" label="Betaald">
            <option :value="true">Betaald</option>
            <option :value="false">Niet betaald</option>
        </Select>
    </Grid>

    <Input
        v-model="registration.name"
        label="Naam"
        placeholder="Naam"
    />

    <Input
        v-model="registration.email"
        label="Emailadres"
        placeholder="Emailadres"
    />
</Section>
```

# Architecture
At the time, I had limited experience developing large-scale web applications intended for real users.

Below is a snippet of the `fetch()` function, which retrieves a specific registration based on its ID.

```ts
async function fetch() {
    if (!validId(id)) {
        await router.push("/onthaal");
        return;
    }

    try {
        loading.value = true;

        await pocketbase
            .collection("registrations")
            .getOne(id)
            .then((response) => (
                registration.value = getRegistration(response))
            );

        loading.value = false;
    } catch (error) {
        await router.push("/onthaal");
        return;
    }
}
```

In hindsight, a better architectural approach would have been to adopt a layered architecture and implement a service like `registration-service.ts`.

```ts
export async function getAll(): Promise<Registration[]> {
    if (!database.authStore.isValid) {
        throw new Error("User is not authenticated");
    }

    try {
        const records: RecordModel[] = await database
            .collection("registrations").getFullList();

        const registrations: Registration[] = records.map(
            (record: RecordModel) => from(record)
        );

        return Array.isArray(registrations) ? registrations : [];
    }
    catch (error) {
        throw new Error("Registrations could not be fetched");
    }
}

```
