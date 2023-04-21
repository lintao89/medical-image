var FindingObservation = {
    "resourceType": "Observation",
    "id": "51870e95-691b-489b-8b54-adc32ee131ee",
    "meta": {
        "versionId": "2",
        "lastUpdated": "2023-03-21T22:09:12.343+08:00",
        "source": "#0uNKFzbRLMB1zxAp",
        "profile": [
            "https://203.64.84.150:58443/r5/fhir/StructureDefinition/ImageFindingObservationSDR4"
        ]
    },
    "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">This is an image finding measurement</div>"
    },
    "extension": [
        {
            "url": "https://203.64.84.150:58443/r5/fhir/StructureDefinition/FindingIDR4",
            "valueIdentifier": {
                "system": "https://docs.google.com/spreadsheets/d/1BBBZZbEO82wkvLbHtbpa4ihdFTMoIG0KQGH5bgUoo70/edit#gid=896973653",
                "value": "S2023-00135"
            }
        }
    ],
    "status": "final",
    "category": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                    "code": "imaging",
                    "display": "Imaging"
                }
            ]
        }
    ],
    "code": {
        "coding": [
            {
                "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                "code": "image.finding",
                "display": "Image finding"
            }
        ]
    },
    "subject": {
        "reference": "Patient/10327275",
        "display": "林廣濤"
    },
    "effectiveDateTime": "2015-02-07T13:28:17-05:00",
    "performer": [
        {
            "reference": "PractitionerRole/10327278",
            "display": "Dr. Adam Careful"
        }
    ],
    "component": [
        {
            "code": {
                "coding": [{
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "image.finding.keyimage"
                }]
            },
            "valueString": "https://203.64.84.150:58443/r5/fhir/DocumentReference/665f781e-5666-4e22-a3c9-638d23ca1043"
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "diagnostic.quality"
                    }
                ]
            },
            "valueString": ""
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "pulmonary.embolism"
                    }
                ]
            },
            "valueString": ""
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "right.heart.strain"
                    }
                ]
            },
            "valueString": ""
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "pulmonary.arteries"
                    }
                ]
            },
            "valueString": ""
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "lung.parenchyma"
                    }
                ]
            },
            "valueString": ""
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "pleural.effusion"
                    }
                ]
            },
            "valueString": ""
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "central.airways"
                    }
                ]
            },
            "valueString": ""
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "adenopathy"
                    }
                ]
            },
            "valueString": ""
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "heart"
                    }
                ]
            },
            "valueString": ""
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "upper.abdomen"
                    }
                ]
            },
            "valueString": ""
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "bones"
                    }
                ]
            },
            "valueString": ""
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "Codesystem/TCUMI707",
                        "code": "impression"
                    }
                ]
            },
            "valueString": ""
        }
    ]
}
