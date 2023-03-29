# FUNDRAISING FOLDER

## Introduction

[AfricaNdoto](https://africandoto.org/) it's an idea that was born in 2016 with the goal to provide better opportunities for the kids and families in Tanzania. That idea turns into a NGO that works to improve the future of many people.

Nowadays, the NGO has the goal to have their activity recognized in Spain and continuing work in projects to offer educational oportunities to Tanzanian children and to empower Tanzanian women. That's the main reason why we work with them to help to improve their website and their fundraising system.

Moreover we want to provide to their sponsors and volunteers a clearest envirorment to get informed and updated about the activity and projects of the organization.

## Users profiles.

- Donor.
- Volunteer.
- Admin.

## Objectives:

- Support.
- Transparecy.
- Information.
- Conciousness.

## Development objectives.

- Improve donation and fundraising system.
- Register of new donors and volunteers.
- New projects catalogue.
- Companies sponsorship.
- Events and proyects calendars.
- Volunteer job listing.
- Transparency web page.

## ENDPOINTS.

### Auth Endpoints

| METHOD | ENDPOINT     | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                                 | RETURNS |
| ------ | ------------ | ----- | ---- | --------------------- | ----------------------------------------------------------- | ------- |
| POST   | /auth/signup | -     | -    | User Sign Up          | name, lastName, email, password, date_of_birth, phone, id_number,adress,role, | token   |
| POST   | /auth/login  | -     | -    | Delete skills form DB | email, password                                             | token   |

### Members Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /members                  | YES   | Admin | Get all users                | -                          | [{ member }]                         |
| GET    | /members/:memberId        | YES   | Members | Get one user               | member_id                  | { member }                           |
| PUT    | /members/:memberId        | YES   | Members | Update user                | member_id                  | "Member updated"                     |
| POST   | /members                  | YES   | Members | Create one user            | req.body                   | "Member created"                     |
| DELETE | /members/:memberId        | YES   | Members | Remove one user            | member_id                  | "Member deleted"                     |

### Donors Endpoints
| GET    | /donors                   | YES   | Admin | Get all donors | -               | [{ donors }]           |
| GET    | /donors/donorId           | YES   | Admin/Donor | Get one donor          | donor_id                   | { donor }                            |
| PUT    | /donors/donorId/member/:memberId  | YES   | Admin/Donor | Update donor   | donor_id                   | "Donor updated"                      |
| DELETE | /donors/:id               | YES   | Admin/Donor | Remove one donors      | donor_id                   | "Profile deleted"                    |


### Volunteers Endpoints

| GET    | /volunteers                | YES   | Admin | Get all volunteers           | -                          | [{ volunteers }]                    |
| GET    | /volunteers/:volunteerId   | YES   | Admin/Volunteer | Get one volunteer  | volunteers_id              | { volunteer }                       |
| PUT    | /volunteers/:volunteersId  | YES   | Admin/Volunteer | Update volunteer   | volunteers_id              | "Volunteer updated"                 |
| DELETE | /volunteers/:id            | YES   | Admin/Volunteer | Remove one volunteer| volunteers_id             | "Profile deleted"                   |


### Projects Endpoints
| GET    | /projects                  | N/A   | All | Get all projects             | -                          | [{ projects }]                      |
| GET    | /projects/:projectId       | N/A   | All | Get one project              | projects_id                | { project }                         |
| PUT    | /projects/:projectsId      | YES   | Admin | Update project             | projects_id                | "Project updated"                   |
| POST   | /projects                  | YES   | Admin/Volunteer | Create one project| req.body                  | "Project created"                   |
| DELETE | /projects/:id              | YES   | Admin | Remove one project         | projects_id                | "Project deleted"                   |

### Events Endpoints
| GET    | /events                    | N/A   | All | Get all events               | -                          | [{ events }]                        |
| GET    | /events/:eventId           | N/A   | All | Get one event                | events_id                  | { event }                           |
| PUT    | /events/:eventsId          | YES   | Admin | Update event               | events_id                  | "Event updated"                     |
| POST   | /events                    | YES   | Admin | Create one event           | req.body                   | "Event created"                     |
| DELETE | /events/:id                | YES   | Admin | Remove one event           | events_id                  | "Event deleted"                     |



### Equipment Endpoints
| GET    | /equipment                 | YES   | Admin | Get all equipment        | -                          | [{ equipment }]                        |
| GET    | /equipment/:equipmentId    | YES   | Admin | Get one equipment        | equipment_id               | { equipment }                          |
| PUT    | /equipment/:equipmentId    | YES   | Admin | Update equipment         | equipment_id               | "Equipment updated"                    |
| DELETE | /equipment/:equipmentId    | YES   | Admin | Remove one donors        | donor_id                   | "Profile deleted"                      |
| POST   | /equipment                 | YES   | Admin/Volunteer| Create one equipment| req.body               | "Equipment created"                    |
| DELETE | /equipment/:equipmentId    | YES   | Admin | Remove one equipment     | equipment_id               | "Equipment deleted"                    |


### Products Endpoints
| GET    | /products                  | N/A   | All | Get all products           | -                            [{ products }]                          |
| GET    | /products/:productId       | N/A   | All | Get one product            | product_id                  | { product }                            |
| PUT    | /products/:productId       | YES   | Admin | Update product           | product_id                  | "Product updated"                      |
| POST   | /products                  | YES   | Admin | Create one product       | req.body                    | "Product created"                      |
| DELETE | /products/:id              | YES   | Admin | Remove one product       | product_id                  | "Product deleted"                      |

### Donations Endpoints

| GET    | /donations                 | YES   | Admin/Donor | Get all donations  | -                           | [{ donations }]                        |
| GET    | /donations/:donationId     | YES   | Admin/Donor | Get one donation   | donation_id                 | { donation }                           |
| PUT    | /donations/:donationId     | YES   | Admin | Update donation          | donation_id                 | "Donation updated"                     |
| POST   | /donations                 | YES   | Admin/Donor | Create one donation| req.body                    | "Donation created"                     |
| DELETE | /donations/:id             | YES   | Admin | Remove one donation      | donation_id                 | "Donation deleted"                     |

| PUT    | /donors/:memberId          | YES   | Admin | Update donor             | donor_id                    | "Donor updated"                        |


### Professionals Endpoints
| GET    | /professionals             | YES   | Admin | Get all professionals     | -                          | [{ professionals }]                    |
| GET    | /professionals/:professionalId| YES| Admin | Get one professional      | professionalId             | { donation }                           |
| PUT    | /professionals/:professionalId| YES| Admin | Update professional       | professionalId             | "Professional updated"                 |
| POST   | /professionals             | YES   | Admin | Create one professional   | req.body                   | "Professional created"                 |
| DELETE | /professionals/:id         | YES   | Admin | Remove one professional   | professionalId             | "Professional deleted"                 |
