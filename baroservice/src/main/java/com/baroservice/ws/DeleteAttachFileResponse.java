
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="DeleteAttachFileResult" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "deleteAttachFileResult"
})
@XmlRootElement(name = "DeleteAttachFileResponse")
public class DeleteAttachFileResponse {

    @XmlElement(name = "DeleteAttachFileResult")
    protected int deleteAttachFileResult;

    /**
     * deleteAttachFileResult �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getDeleteAttachFileResult() {
        return deleteAttachFileResult;
    }

    /**
     * deleteAttachFileResult �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setDeleteAttachFileResult(int value) {
        this.deleteAttachFileResult = value;
    }

}
