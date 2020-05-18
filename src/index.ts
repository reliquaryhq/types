type CdromDescription = {
  id: number;
  cdromId?: number;
  cdromSubmissionId?: number;
  discIndex?: number;
  labelProductName?: string;
  labelDiscName?: string;
  labelLegalese?: string;
  labelPartNumber?: string;
  labelVersion?: string;
  masteringCode?: string;
  masteringSidCode?: string;
  toolstampCode?: string;
  mouldSidCode?: string;
  notes?: string;
  createdAt?: number;
  updatedAt?: number;
};

type NewCdromDescription = Omit<CdromDescription, 'id'>;

type CdromDump = {
  id: number;
  cdromId?: number;
  cdromSubmissionId?: number;
  copyProtectionId?: number;
  dumpControllerId?: number;
  dumpDriveId?: number;
  dumpFormatId?: number;
  dumpModificationStateId?: number;
  dumpReadStateId?: number;
  dumpToolId?: number;
  notes?: string;
  createdAt?: number;
  updatedAt?: number;
};

type NewCdromDump = Omit<CdromDump, 'id'>;

type CdromSubmission = {
  id: number;
  cdromId?: number;
  sourceId?: number;
  submissionStateId?: number;
  userId?: number;
  createdAt?: number;
  updatedAt?: number;
};

type NewCdromSubmission = Omit<CdromSubmission, 'id'>;

type Session = {
  userId?: number;
};

type Source = {
  id: number;
  userId?: number;
  name?: string;
  notes?: string;
  createdAt?: number;
  updatedAt?: number;
};

type NewSource = Omit<Source, 'id'>;

type User = {
  id: number;
  name?: string;
  passwordHash?: string;
  passwordSalt?: string;
  passwordKeylen?: number;
  createdAt?: number;
  updatedAt?: number;
};

type NewUser = Omit<User, 'id'>;

export {
  CdromDescription,
  CdromDump,
  CdromSubmission,
  NewCdromDescription,
  NewCdromDump,
  NewCdromSubmission,
  NewUser,
  Session,
  Source,
  NewSource,
  User,
};
