
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
 *         &lt;element name="GetEmailPublicKeysResult" type="{http://ws.baroservice.com/}ArrayOfEMAILPUBLICKEY" minOccurs="0"/&gt;
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
    "getEmailPublicKeysResult"
})
@XmlRootElement(name = "GetEmailPublicKeysResponse")
public class GetEmailPublicKeysResponse {

    @XmlElement(name = "GetEmailPublicKeysResult")
    protected ArrayOfEMAILPUBLICKEY getEmailPublicKeysResult;

    /**
     * getEmailPublicKeysResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfEMAILPUBLICKEY }
     *     
     */
    public ArrayOfEMAILPUBLICKEY getGetEmailPublicKeysResult() {
        return getEmailPublicKeysResult;
    }

    /**
     * getEmailPublicKeysResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfEMAILPUBLICKEY }
     *     
     */
    public void setGetEmailPublicKeysResult(ArrayOfEMAILPUBLICKEY value) {
        this.getEmailPublicKeysResult = value;
    }

}
