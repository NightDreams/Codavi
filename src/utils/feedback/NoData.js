import React from "react";
import { ReactComponent as FolderIcon } from "../../icons/folder.svg";
import styled from "styled-components";

// Translation
import { useTranslation } from "react-i18next";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 22px 20px;
  border-radius: 5px;
  background-color: #f2f2f2;
  width: 50%;
  margin: auto;
  text-align: center;
  span {
    vertical-align: sub;
    margin-right: 6px;
    display: inline-flex;
    svg {
      width: 22px;
    }
  }
`;

const Text = styled.h3`
  font-weight: 500;
`;

export const NoData = () => {
  const { t } = useTranslation();

  return (
    <Content>
      <Text>
        {" "}
        <span>
          <FolderIcon />
        </span>{" "}
        {t("feedback.noData")}
      </Text>
    </Content>
  );
};
