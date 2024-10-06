# Extending Interface 
## Examples

**Pehle jo interfaces the:**

```typescript
interface person {
    name: string;
    age: number;
}

interface employee {
    name: string;
    age: number;
    email: string;
}
```

Yahan pe `person` aur `employee` interfaces alag alag hain. Agar kisi ko `employee` banate ho, to usmein `name`, `age`, aur `email` sab kuch include karna padta hai.

#### Pehle ka code:
```typescript
let person1: person = {
    name: "Shaheer Ahmad",
    age: 21
}

let employee1: employee = {
    name: "Shaheer Ahmad",
    age: 21,
    email: "shaheerahmad9023@gmail.com"
}
```

Yeh approach chal rahi hai lekin bar bar `name` aur `age` likhna pad raha hai.

---

### Interface ko Extend karna

Ab hum `employee` interface ko extend karenge `person` interface se. Iska matlab, `employee` mein jo properties `person` ki hain, wo already include ho jayengi, aur hum `email` ko separately add kar sakte hain.

```typescript
interface person {
    name: string;
    age: number;
}

interface employee extends person {
    email: string;
}
```

Ab `employee` automatically `name` aur `age` ko le lega `person` se. Sirf `email` ko add karna hai. 

#### After extending code:
```typescript
let person2: person = {
    name: "Anas Ahmad",
    age: 23
}

let employee2: employee = {
    name: "Anas Ahmad",
    age: 23,
    email: "anasahmad9023@gmail.com"
}
```

Yeh approach better hai kyunki ab bar bar same properties likhne ki zarurat nahi. `employee` interface automatically `person` wali properties inherit kar raha hai.

---

### Interface ko Merge karna

TypeScript mein, agar tum same naam ke interfaces ko bar bar declare karte ho, to wo automatically merge ho jate hain. Matlab, ek interface mein jo properties hain, doosre wale mein bhi wo add ho jati hain.

```typescript
interface person {
    name: string;
    age: number;
}

interface person {
    email: string;
}
```

Yahan `person` ka interface merge ho gaya hai, aur ab `person` ke paas `name`, `age`, aur `email` sab kuch hoga. Agar tum `person` ka object banate ho aur `email` add nahi karte to error milega:

#### Error example:
```typescript
let person3: person = {
    name: "Anas Ahmad",
    age: 23
    // Error!! Email nahi diya, lekin wo required hai ab.
}
```

Yeh error isliye aa raha hai kyunki `email` ab `person` ka required part hai, aur tumne wo include nahi kiya.